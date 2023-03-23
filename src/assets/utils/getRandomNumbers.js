export const getRandomNumbers = (min, max) => {
    const amplitud =  max - min;
    const amplitudRandom = Math.floor(Math.random()*amplitud);
    return amplitudRandom+min;
}