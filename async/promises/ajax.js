function getData(options) {
  return new Promise((resolve, reject) => {
    $.get("example.php",
          options,
          response => resolve(JSON.parse(response)),
          () => reject(new Error("AJAX request failed!")));
  });
}

// usage
getData({ name: "John" })
  .then(data => console.log(data), )
  .catch(err => console.log("Error! " + err));