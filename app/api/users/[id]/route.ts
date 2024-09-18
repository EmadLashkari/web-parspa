import { NextResponse } from "next/server";

interface UserData {
  name?: string;
  email?: string;
  [key: string]: any; // Allow additional fields in the user data
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params; // Get user ID from URL params
    const updatedUserData: UserData = await req.json(); // Get updated data from the request body

    // In a real application, you'd update the user in the database
    console.log(`Updating user with ID: ${id}`, updatedUserData);

    // Simulate an update
    const updatedUser = {
      id,
      ...updatedUserData,
    };

    return NextResponse.json({
      message: "User updated successfully",
      updatedUser,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update user", error: String(error) },
      { status: 500 }
    );
  }
}
