export const sendRequest = () => {
    const sendRequestGet = async (url) => {
        const result = await fetch(url)
        return result.json()
    }

    const sendRequestPost = async (url, data) => {
        const result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return result.json()
    }

    const sendRequestPut = async (url, data) => {
        const result = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return result.json()
    }

    const sendRequestDelete = async (url) => {
        const result = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return result.json()
    }

    return {sendRequestGet, sendRequestPost, sendRequestPut, sendRequestDelete}
}