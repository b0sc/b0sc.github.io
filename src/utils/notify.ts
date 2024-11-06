export const NotifySuccess = (msg: string) => {
  //   console.log("Toast message sent!")

  // code editor might show error here but it will work fine
  Toastify({
    text: msg,
    duration: 3000,
    destination: "/", // destination when clicked
    newWindow: false, // open destination in new window
    close: false, // close icon button
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background:
        "linear-gradient(90deg, rgba(17,117,5,1) 10%, rgba(84,196,93,1) 91%)",
    },
    onClick: function () {}, // Callback after click
  }).showToast()
}

export const NotifyError = (msg: string) => {
  Toastify({
    text: msg,
    duration: 3000,
    destination: "/", // destination when clicked
    newWindow: false, // open destination in new window
    close: false, // close icon button
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background:
        "linear-gradient(90deg, rgba(255,0,0,1) 10%, rgba(218,83,138,1) 91%)",
    },
    onClick: function () {}, // Callback after click
  }).showToast()
}

// NotifyMessage class
export class NotifyMessage {
  constructor(msg: string, time: number) {
    this.toast = Toastify({
      text: msg,
      duration: time,
      //   destination: "/",
      newWindow: false,
      close: false,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background:
          "linear-gradient(90deg, rgba(0,123,255,1) 10%, rgba(72,201,245,1) 91%)",
      },
      onClick: function () {},
    })
  }

  show() {
    this.toast.showToast()
  }

  hide() {
    this.toast.hideToast()
  }
}
