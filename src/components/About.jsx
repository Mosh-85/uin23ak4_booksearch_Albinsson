import Character from "../assets/img/noimg.svg";

export default function About() {
  return (
    <article className="about">
      <h1>About Me</h1>
      <img src={Character} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nisl at tincidunt malesuada, velit nisl ultricies sapien,
        vel congue nisl odio at ipsum. Sed nec nunc ac justo consectetur
        aliquet. In hac habitasse platea dictumst. Nullam consectetur, nisl at
        tincidunt malesuada, velit nisl ultricies
      </p>
    </article>
  );
}
