const postFormData = async (url, body) => {
    const res = await fetch(url, {
        method: 'POST',
        body: body
    });

    if (!res.ok) {
        throw new Error(`Url: ${url}, status: ${res.status}`);
    }

    return res;
};

export {postFormData};