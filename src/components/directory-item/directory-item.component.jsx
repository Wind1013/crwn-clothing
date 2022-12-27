import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

function DirectoryItem({ category }) {
  const navigate = useNavigate();

  const onClickHandler = () => navigate(route);

  const { title, imageUrl, route } = category;
  return (
    <DirectoryItemContainer onClick={onClickHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
