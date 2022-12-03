// Get the item ID via the query string from the previous page

// import the URL for the API call
import { getListingURL } from "../api/api-base-urls.mjs";
const listingURL = getListingURL("eb721aab-149d-4ee9-bab4-a298c7713794");

// no image "960bb61f-f6e1-491b-9510-dfd70c0db199"
// 2 images "07b46cb6-c750-42ac-b2a3-dee8b3ed7139"
// 3 images "fe677260-8522-43b4-b19f-e76891ef53dc"
// with more bids and two images a43ef005-8509-4936-908a-4febffb49400
// with a lot of bids eb721aab-149d-4ee9-bab4-a298c7713794

// import the fetch option method
import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { getListing } = fetchMetdhods;

// import the function to create the gallery
import { createGallery } from "./gallery.mjs";

// import the function to display the item name and details
import { displayItemInfo } from "./info.mjs";

// import function to display bids
import { displayBids } from "./bids.mjs";

// doing the API call
export async function getGalleryImages(listingURL) {
  const response = await fetch(listingURL, getListing);
  const json = await response.json();
  createGallery(json);
  displayItemInfo(json);
  displayBids(json.bids);
}
getGalleryImages(listingURL);