<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{

    public function index(Request $request)
    {
        $perPage = $request->input('perPage', 10); // Default per page
        $page = $request->input('page', 1); // Default page

        $items = Customer::paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'data' => $items->items(),
            'total' => $items->total(),
            'pageInfo' => [
                'page' => $items->currentPage(),
                'perPage' => $items->perPage(),
            ],
        ]);
    }
    public function saveCustomer(Request $request){

        return response()->json(['data' => $request->all()], 201);

        $validatedData = Validator::make($request->all(),[
            'email' => 'required|email',
            'name' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'city' => 'required',
        ], [
            'email.required' => 'The email field is required.',
            'email.email' => 'The email must be a valid email address.',
        ]);

        if ($validatedData->fails()) {
            return response()->json(['errors' => $validatedData->errors()], 422);
        }
        $imageUrl='';
        if($request->hasFile('photo'))
        {
            $photo = $request->file('photo');
            $imageName = $photo->getClientOriginalName(); // Get the original name of the uploaded file
            $photo->storeAs('images', $imageName);
            return response()->json(['data' => 12321], 201);
        }
        $customer = new Customer();
        $customer->name = $request->name;
        $customer->email = $request->email;
        $customer->phone = $request->phone;
        $customer->address = $request->address;
        $customer->nid_no = $request->nid_no;
        $customer->city = $request->city;
        $customer->photo =$imageUrl;
        $customer->save();

        return response()->json(['data' => $customer], 201);
    }
    public function show($id)
    {
        $resource = Customer::find($id);

        if (!$resource) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        return response()->json(['data' => $resource]);
    }

    public function destroy($id)
    {
        $resource = Customer::find($id);

        if (!$resource) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        $resource->delete();

        return response()->json(['message' => 'Resource deleted'], 200);
    }

}
