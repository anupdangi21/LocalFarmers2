hello iam anup dangi and iam handling the backend side


@import url('https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat' , sans-serif;
}
 body{

    background-image: url(/background.jpg);

 }
nav{
    background: #1c4301;
    padding: 10px 40px 10px 70px;
    border: 1px solid #000;
    border-left: none;
    border-right: none;
}

nav ul{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

nav ul li.logo{
    flex: 1;
    color: #cccccc;
}

nav ul li.logo img {
    width: 50px; 
    height: auto; 
    margin-right: 10px; 
  }

nav ul div.items{
    padding: 0 25px;
    display: inline-flex;
}

nav ul div.items a{
    text-decoration: none;
    font-size: 16px;
    padding: 0 12px;
    color: #cccccc;
}

nav ul div.items a:hover{
    color: rgb(65, 189, 65);
}

nav ul .searchicon{
    height: 40px;
    width: 240px;
    display: flex;
    background: #f2f2f2;
    border-radius: 5px;
}

nav ul .searchicon input{
    height: 100%;
    width: 200px;
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 0 10px;
    color: #000;
    font-size: 16px ;
    outline: none;
}

nav ul .searchicon .icon{
    height: 100%;
    width: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #cccccc;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}

.loginbox{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px;
}

.loginform{
    width: 420px;
    background: rgb(53, 122, 80);
    color: #f2f2f2;
    border-radius: 10px;
    padding: 30px 40px;
}

.loginform h1{
    font-size: 35px;
    text-align: center;
}

.loginform .inputbox{
    width: 100%;
    height: 50px;
    position: relative;
    margin: 30px 0;
}

.inputbox input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid white;
    border-radius: 40px;
    font-size: 15px;
    color: #f2f2f2;
    padding: 20px 45px 20px 20px;
}

.inputbox input::placeholder{
    color: #f2f2f2;
}

.inputbox i{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
}

.loginform .rem{
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    margin: -15px 0 15px;
}

.rem label input{
    accent-color: #fff;
    margin-right: 3px;
}

.rem a{
    color: #fff;
    text-decoration: none;
}

.rem a:hover{
    text-decoration: underline;
}

.loginform .btnlogin{
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
}

.loginform .register{
    text-align: center;
    font-size: 14px;
    margin: 20px 0 15px;
}

.register p a{
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.register p a:hover{
    text-decoration: underline;
}

.registerbox{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px;
}

.registerform{
    width: 420px;
    background: rgb(53, 122, 80);
    color: #f2f2f2;
    border-radius: 10px;
    padding: 30px 40px;
}

.registerform h1{
    font-size: 35px;
    text-align: center;
}

.registerform .register{
    text-align: center;
    font-size: 14px;
    margin: 20px 0 15px;
}

.logback p a{
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.logback p a:hover{
    text-decoration: underline;
}

.registerform .btnregister{
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
}

.registerform .logback{
    text-align: center;
    font-size: 14px;
    margin: 20px 0 15px;
}

.registerform .inputbox{
    width: 100%;
    height: 50px;
    position: relative;
    margin: 30px 0;
}

.category-section {
    display: flex;
  }
  
  .half {
    flex: 1;
    padding: 20px;
  }

  .half h2{
    text-align: center;
  }

.photos{
    width: 40%;
    margin-top: 80px;
    margin-left: 30px;
    height: 380px;
    display: flex;
    gap: 5px;
}

.photos img{
    width: 20%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    border: 2px solid white;
    transition: all ease 0.3s;
    cursor: pointer;
}

.photos img:hover{
    width: 70%;
}

.info h1{
    margin-left: 770px;
    margin-top: -390px;
    color: black;
    font-weight: 550;
    font-family: "Tilt Neon", sans-serif;
}

.category-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 130px;
  }

  .category-box {
    width: 450px;
    height: 337px;
    background-color: rgba(194, 232, 194, 0.8);
    border: 1px solid #000;
    margin-right: 20px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-radius: 27px;
  }

  .category-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    
  }

  .shop-now-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    border-radius: 27px;
  }
  .shop-now-button:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  .category-box h2{
    text-align: center;
    margin-top: 23px;
  }

  .category-box img{
    width: 207px;
    height: 178px;
    margin-top: 17px;
    margin-bottom: 20px;
    border-radius: 27px;
  }

  .fruit-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 25px;
  }

  .fruit-item {
    width: 200px;
    height: 200px;
    background-color: #c2e8c2;
    border: 1px solid #000;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .fruit-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .fruit-image {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }

  .fruit-price {
    font-size: 16px;
    font-weight: bold;
  }

  .add-to-cart-button {
      padding: 5px 10px;
      background-color: #4CAF50;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .veg-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 25px;
      }
    
      .veg-item {
        width: 200px;
        height: 200px;
        background-color: #c2e8c2;
        border: 1px solid #000;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    
      .veg-name {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    
      .veg-image {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
      }
    
      .veg-price {
        font-size: 16px;
        font-weight: bold;
      }

      .registerform .btnregistersupplier{
        width: 100%;
        height: 45px;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 40px;
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-weight: 600;
    }

    /* .about h2{
      text-align: center;
    } */

    .about {
      text-align: center;
      margin-top: 30px;
  }
  
  .about p {
      text-align: justify;
      display: inline-block;
  }

  .contact{
    display: block;
    text-align: center;
    margin-top: -40px;
  }

  .contact i{
    font-size: 20px;
  }

  .or{
    font-weight: 500;
  }

  .number{
    font-weight: 600;
  }

  .feedbackbox{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px;
}

.feedbackform{
    width: 420px;
    background: rgb(53, 122, 80);
    color: #f2f2f2;
    border-radius: 10px;
    padding: 30px 40px;
    margin-top: -40px;
}

.feedbackform h1{
    font-size: 35px;
    text-align: center;
}

.feedbackform .inputbox{
    width: 100%;
    height: 50px;
    position: relative;
    margin: 30px 0;
}

.feedbackform .btnlogin{
  width: 100%;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

.about p{
  margin-top: 5px;
}

hello iam anup dangi and iam handling the backend side


@import url('https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat' , sans-serif;
}
 body{

    background-image: url(/background.jpg);

 }
nav{
    background: #1c4301;
    padding: 10px 40px 10px 70px;
    border: 1px solid #000;
    border-left: none;
    border-right: none;
}

nav ul{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

nav ul li.logo{
    flex: 1;
    color: #cccccc;
}

nav ul li.logo img {
    width: 50px; 
    height: auto; 
    margin-right: 10px; 
  }

nav ul div.items{
    padding: 0 25px;
    display: inline-flex;
}

nav ul div.items a{
    text-decoration: none;
    font-size: 16px;
    padding: 0 12px;
    color: #cccccc;
}

nav ul div.items a:hover{
    color: rgb(65, 189, 65);
}

nav ul .searchicon{
    height: 40px;
    width: 240px;
    display: flex;
    background: #f2f2f2;
    border-radius: 5px;
}

nav ul .searchicon input{
    height: 100%;
    width: 200px;
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 0 10px;
    color: #000;
    font-size: 16px ;
    outline: none;
}

nav ul .searchicon .icon{
    height: 100%;
    width: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #cccccc;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}

.loginbox{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px;
}

.loginform{
    width: 420px;
    background: rgb(53, 122, 80);
    color: #f2f2f2;
    border-radius: 10px;
    padding: 30px 40px;
}

.loginform h1{
    font-size: 35px;
    text-align: center;
}

.loginform .inputbox{
    width: 100%;
    height: 50px;
    position: relative;
    margin: 30px 0;
}

.inputbox input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid white;
    border-radius: 40px;
    font-size: 15px;
    color: #f2f2f2;
    padding: 20px 45px 20px 20px;
}

.inputbox input::placeholder{
    color: #f2f2f2;
}

.inputbox i{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
}

.loginform .rem{
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    margin: -15px 0 15px;
}

.rem label input{
    accent-color: #fff;
    margin-right: 3px;
}

.rem a{
    color: #fff;
    text-decoration: none;
}

.rem a:hover{
    text-decoration: underline;
}

.loginform .btnlogin{
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
}

.loginform .register{
    text-align: center;
    font-size: 14px;
    margin: 20px 0 15px;
}

.register p a{
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.register p a:hover{
    text-decoration: underline;
}

.registerbox{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px;
}

.registerform{
    width: 420px;
    background: rgb(53, 122, 80);
    color: #f2f2f2;
    border-radius: 10px;
    padding: 30px 40px;
}

.registerform h1{
    font-size: 35px;
    text-align: center;
}

.registerform .register{
    text-align: center;
    font-size: 14px;
    margin: 20px 0 15px;
}

.logback p a{
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.logback p a:hover{
    text-decoration: underline;
}

.registerform .btnregister{
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
}

.registerform .logback{
    text-align: center;
    font-size: 14px;
    margin: 20px 0 15px;
}

.registerform .inputbox{
    width: 100%;
    height: 50px;
    position: relative;
    margin: 30px 0;
}

.category-section {
    display: flex;
  }
  
  .half {
    flex: 1;
    padding: 20px;
  }

  .half h2{
    text-align: center;
  }

.photos{
    width: 40%;
    margin-top: 80px;
    margin-left: 30px;
    height: 380px;
    display: flex;
    gap: 5px;
}

.photos img{
    width: 20%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    border: 2px solid white;
    transition: all ease 0.3s;
    cursor: pointer;
}

.photos img:hover{
    width: 70%;
}

.info h1{
    margin-left: 770px;
    margin-top: -390px;
    color: black;
    font-weight: 550;
    font-family: "Tilt Neon", sans-serif;
}

.category-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 130px;
  }

  .category-box {
    width: 450px;
    height: 337px;
    background-color: rgba(194, 232, 194, 0.8);
    border: 1px solid #000;
    margin-right: 20px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-radius: 27px;
  }

  .category-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    
  }

  .shop-now-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    border-radius: 27px;
  }
  .shop-now-button:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  .category-box h2{
    text-align: center;
    margin-top: 23px;
  }

  .category-box img{
    width: 207px;
    height: 178px;
    margin-top: 17px;
    margin-bottom: 20px;
    border-radius: 27px;
  }

  .fruit-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 25px;
  }

  .fruit-item {
    width: 200px;
    height: 200px;
    background-color: #c2e8c2;
    border: 1px solid #000;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .fruit-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .fruit-image {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }

  .fruit-price {
    font-size: 16px;
    font-weight: bold;
  }

  .add-to-cart-button {
      padding: 5px 10px;
      background-color: #4CAF50;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .veg-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 25px;
      }
    
      .veg-item {
        width: 200px;
        height: 200px;
        background-color: #c2e8c2;
        border: 1px solid #000;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    
      .veg-name {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    
      .veg-image {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
      }
    
      .veg-price {
        font-size: 16px;
        font-weight: bold;
      }

      .registerform .btnregistersupplier{
        width: 100%;
        height: 45px;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 40px;
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-weight: 600;
    }

    /* .about h2{
      text-align: center;
    } */

    .about {
      text-align: center;
      margin-top: 30px;
  }
  
  .about p {
      text-align: justify;
      display: inline-block;
  }

  .contact{
    display: block;
    text-align: center;
    margin-top: -40px;
  }

  .contact i{
    font-size: 20px;
  }

  .or{
    font-weight: 500;
  }

  .number{
    font-weight: 600;
  }

  .feedbackbox{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px;
}

.feedbackform{
    width: 420px;
    background: rgb(53, 122, 80);
    color: #f2f2f2;
    border-radius: 10px;
    padding: 30px 40px;
    margin-top: -40px;
}

.feedbackform h1{
    font-size: 35px;
    text-align: center;
}

.feedbackform .inputbox{
    width: 100%;
    height: 50px;
    position: relative;
    margin: 30px 0;
}

.feedbackform .btnlogin{
  width: 100%;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

.about p{
  margin-top: 5px;
}