export function getCsrfToken(): string {
    const csrfToken = document.getElementById("csrf-token")?.getAttribute("content")
    if (csrfToken)
        return csrfToken
    else
        throw Error("Missing CSRF element or its content")
}
