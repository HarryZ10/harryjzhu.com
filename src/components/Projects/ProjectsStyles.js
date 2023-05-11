import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 110px;
  }
`

export const BlogCard = styled.div`
  padding-top: 3rem;
  border-radius: 10px;
  background-color: #13171c;
  box-shadow: 10px 15px 25px rgba(80, 78, 78, 0.5);
  text-align: center;
  margin-bottom: 5rem;
  width: 80%;
  margin: 0 auto;
  border-radius: 20px;
  margin-bottom: 3.6rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 0 !important;
    margin-top: 3rem !important;
    width: 98%;
    box-shadow: 0 0 0 !important;
  }
`;


export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  margin-top: 10px;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 2px;
  color: #637a87;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    color: #c4e9ff;
    transform: scaleX(1);
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #637a87;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export const HeaderThreeModal = styled.h3`
  margin-top: 10px;
  text-decoration: none;
  font-weight: 1;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #9cc9e3;
  padding: 20px 50px 20px 50px;
  font-size: 3rem;
  color: #000;
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.43rem;
    padding: 0 10px 20px 10px;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;


export const Hr2 = styled.hr`
  width: 50px;
  height: 3px;
  // margin: 20px auto;
  border: 0;
  background: #d0bb57;
  margin-bottom: 20px;
  margin-top: 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: ${(props) => props.modal ? '#000' : '#a8b2d1'};
  font-style: 2rem;
  padding-top: 1rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 10px;
    padding-top: 10px;
    padding-bottom: 1rem;
    line-height: 22px;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color:#d4c0c0;
  font-size: 1.6rem;
  padding:1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover{
    background: #801414;
  }
  margin-bottom: 3rem;
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;

  // mobile screen 425
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: .01rem .3rem;
    font-size: 1.2rem;
  }
`
