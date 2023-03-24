import "./CommentItem.css";

export const CommentItem = ({ img, name, content }) => {
  return (
    <div className="comment-item">
      <img className="comment-profile-img" src={img} alt="" />
      <span className="comment-name">{name}</span>
      <span className="comment-content">{content}</span>
    </div>
  );
};
