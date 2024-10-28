import styled from "styled-components";

export const NavBar = styled.article`
  @media  (width >= 992px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  @media (width <= 991px) {
    width: 2rem;
    height: 2.3rem;
    position: fixed;
    z-index: 5; 
    top: 31px;
    right: 130px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    transform: scale(0.9);
    cursor: pointer;

    @media (width < 600px){
        transform: scale(0.8);
        right:100px;
      }
      @media (width < 426px){
        transform: scale(0.8);
        right:70px;
      }

    div {
      width: 2.3rem;
      height: 0.25rem;
      border-radius: 10px;
      background-color: ${({ open }) => (open ? '#ccc' : '#ffffff')};
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }
      &:nth-child(2) {
        transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;

export const NavWrapper = styled.div`
  @media (width <= 991px) {
   
    nav {
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      opacity: ${({ open }) => (open ? 1 : 0)};
      visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
      display: flex;
      position: fixed;
      align-items: center; 
      justify-content: center; 
      flex-flow: column nowrap;
      background-color: #131313da;
      top: 0px;
      right: 0;
      padding: 2rem;
      width: 45%;
      height: 100vh;
      transition: all 0.3s ease-in-out;

      @media (width < 600px){
        width:40%;
      }

       }
      ul{
        width:100%;
      }
      li {
          list-style: none;
          padding: 15px 0;
          text-align: center;
          margin-top: 10%; 
      }
      li:hover{
        background-color: #131313;
        border-radius:5px;
        transform:scale(1.1);
        transition: 0.5s;
      }
      a{
        color: #eb4848;
        text-decoration:none;
        font-weight:500;
        width:100%;
        font-size:1.3em;
        
        @media (width < 600px){
          font-size:1.1em;
      }
      }
  }
`;