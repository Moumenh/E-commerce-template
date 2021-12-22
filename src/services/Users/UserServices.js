export const LoadUserDataService = async () => {

    const response = await (await fetch('http://localhost:5000/api/user/auth', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-sky": localStorage.getItem("auth-sky")
        }
    })).json();
    return response;
}

export const SignUpService = async (data) => {
    const Response = await (await fetch('http://localhost:5000/api/user/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })).json();
    console.log('hiiiiiiii');
    return Response;
}

export const LoginUserServer = async (data) => {
    const Response = await (await fetch('http://localhost:5000/api/user/login', {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data)
    })).json();
    console.log('hiu');
    return Response
}