const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum distinctio 
          culpa qui ab dolor ipsa, tenetur dicta dolores id vel molestiae alias 
          magnam mollitia excepturi esse quis earum reiciendis, exercitationem error, 
          sed placeat reprehenderit quisquam illum impedit! Deleniti id temporibus 
          quibusdam consequuntur blanditiis nobis, sint, quam repellat praesentium optio nisi.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus 
          eum iste sunt nostrum sequi quis molestias, provident deserunt reprehenderit sed 
          saepe accusamus corporis sapiente reiciendis alias! Omnis delectus id labore commodi vitae 
          fuga soluta.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non reiciendis dicta minus.</p>
          <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default Biography