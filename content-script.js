const targetNode = document.querySelector("body");
var tim;

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const removeModal = (mutationsList, observer) => {
  mutationsList.forEach((mutation) => {
    let found = mutation.target.classList[0] == "ReactModalPortal";
    if (found) {
      mutation.target.remove();
      observer.disconnect();
    }
  });
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(removeModal);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
