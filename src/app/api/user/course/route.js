import { NextResponse } from "next/server";

const courseUserOwned=[
    {user:1,title:"Introduction to Web Development",slug:"intro-to-web-development",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"},
    {user:1,title:"Advanced Data Science",slug:"advanced-data-science",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"},
    {user:1,title:"Python for Beginners",slug:"python-for-beginners",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"},
    {user:1,title:"Introduction to Web Development",slug:"intro-to-web-development",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"},
    {user:1,title:"Advanced Data Science",slug:"advanced-data-science",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"},
    {user:1,title:"Python for Beginners",slug:"python-for-beginners",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"}
]

export async function GET(){
    return NextResponse.json(courseUserOwned,{status:200})
}