
export async function GET(request: Request) {
    console.log(request)
    const response =await fetch(request)
    console.log(await response.json())
  }