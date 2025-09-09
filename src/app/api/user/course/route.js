import { NextResponse } from "next/server";

const courseUserOwned=[
    {user:1,title:"Introduction to Web Development",slug:"statistic-description",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"},
    {user:1,title:"Advanced Data Science",slug:"statistic-description",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"},
    {user:1,title:"Python for Beginners",slug:"statistic-description",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"},
    {user:1,title:"Introduction to Web Development",slug:"statistic",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"},
    {user:1,title:"Advanced Data Science",slug:"statistic",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"},
    {user:1,title:"Python for Beginners",slug:"statistic",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"}
]

export async function GET(){
    return NextResponse.json(courseUserOwned,{status:200})
}