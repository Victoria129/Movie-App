const getItem = async (num) => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${num}`);
    const myJson = await response.json();
    return myJson;
};

module.exports = getItem;