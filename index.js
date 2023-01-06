window.onload = async function() {
  const viewCountUrl = "https://8lfe7399ra.execute-api.us-west-2.amazonaws.com/default"

  let counterContainer = document.getElementById("viewcounter");

  await fetch(viewCountUrl, {
      method: "GET",
   })
  .then(response => response.json())
  .then(jsonResponse => counterContainer.innerHTML= jsonResponse.body)
  .catch(error => console.error('error', error))
}
