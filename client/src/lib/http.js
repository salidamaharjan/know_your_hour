export async function post(url, body) {
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    if (response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return;
    }
    return await response.json();
}