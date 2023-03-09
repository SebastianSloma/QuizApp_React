import quiz from "../img/pobrane.webp"

const welcome = () => {
  return (
    <div id="welcome">
        <h2>Welcome</h2>
        <p>Click the button below to get started:</p>
        <button>Start</button>
        <img src="{quiz}" alt="img" />
    </div>
  )
}

export default welcome