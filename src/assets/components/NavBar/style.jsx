import styled from "styled-components";

export const NavBar = styled.article`
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  @media only screen and (max-width: 991px) {
    width: 2rem;
    height: 2.3rem;
    position: fixed;
    z-index: 1; 
    top: 25px;
    right: 50px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    transform: scale(0.8);
    cursor: pointer;

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
  @media only screen and (max-width: 767px) {
    right: 30px;
  }
`;

export const NavWrapper = styled.div`
  @media only screen and (max-width: 991px) {
    
    ul {
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      opacity: ${({ open }) => (open ? 1 : 0)};
      visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
      display: flex;
      position: fixed;
      align-items: center; 
      justify-content: center; 
      flex-flow: column nowrap;
      background-color: #262626c5;
      top: 0px;
      right: 0;
      padding: 2rem;
      width: 45%;
      height: 100vh;
      transition: all 0.3s ease-in-out;
      list-style: none;

      li {
        padding: 12px 0;
        color: white;
        font-family: "Kufam", sans-serif;
        text-align: center;
        margin-top: 10%;
      }
      li:hover {
        color: #269e6d;
        width: 100%;
        background-color: white;
        font-weight: 600;
        transition: 0.5s;
        transform: scale(1.2);
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;