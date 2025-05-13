export const GET = async ({ request }) => {
    const authHeader = request.headers.get('Authorization');

    if (authHeader !== 'Myauthheader') {
        return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
    }

    const res = await fetch('https://dummyjson.com/posts?limit=10');
    const data = await res.json();

    return new Response(JSON.stringify({ message: (data) }), { status: 200 });
}

export const POST = async ({ request }) => {
    const body = await request.json();
    const authHeader = request.headers.get('Authorization');

    if (authHeader !== 'Myauthheader') {
        return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
    }

    console.log(body);

    return new Response(JSON.stringify({ message: "Success" }), { status: 201 })
}