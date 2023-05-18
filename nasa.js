const apiURL = "https://api.nasa.gov/planetary/apod?api_key=7gsKjc923HxknYcNh18j9A8M8f4PWfkqdAOQfsRg"

const handleClick = (event) => {

  event.preventDefault

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {

      // Extract information from the JSON response
      const title = data.title;
      const imageUrl = data.url;
      const copyright = data.copyright;
      const explanation = data.explanation;

      // Update the HTML elements with the retrieved information
      document.getElementById("title").innerText = `Title: ${title}`;
      document.getElementById("image-container").innerHTML = `<img src="${imageUrl}" alt="Picture of the day!">`;
      document.getElementById("copyright").innerText = `@copyright: ${copyright}`;
      document.getElementById("explanation").innerText = `Explanation: ${explanation}`;
    })
    .catch(error => {
      console.log("Error:", error);
    });
}




// "title" - for the image title
// "url" - for the image itself
// "copyright" - name of who ownes the image
// "explanation" - explanation section