export const getRate = async (path) => {
    const response = await fetch(path, {method: 'GET',});
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};

