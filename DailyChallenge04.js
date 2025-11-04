function imageSearch(images, searchTerm) {
    // Convert search term to lowercase for case-insensitive matching
    const lowerSearch = searchTerm.toLowerCase();

    // Filter images that include the search term(case-insensitive)
    return images.filter(image => image.toLowerCase().includes(lowerSearch));
}

// Test cases
console.log(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"));
// ["dog.png"]

console.log(imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"));
// ["Sunset.jpg", "sunflower.jpeg"]

console.log(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"));
// ["Moon.png", "stars.png"]


console.log(imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat"));
// ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]

