import { NextResponse } from "next/server";
import connectDB from "@/db/config";
import Website from "@/models/websitesModel";

export async function DELETE(req :any) {
  connectDB('websites');

  try {
    const itemId = req.query.id; // Get the ID from the URL parameter

    const deletedWebsite = await Website.findByIdAndDelete(itemId);

    if (!deletedWebsite) {
      return new NextResponse({ msg: 'Website not found' }, { status: 404 });
    }

    return new NextResponse({ msg: 'Website deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting website:', error);
    return new NextResponse({ msg: 'Server error' }, { status: 500 });
  }
}


