import styled from "@emotion/styled";
import { useState } from "react";

const ReadMoreButton = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

const TruncateText = ({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncateText = expanded ? text : text.slice(0, maxLength);
  const showEllipsis = !expanded && text.length > maxLength;

  return (
    <div>
      {truncateText}
      {showEllipsis && "..."}
      {!expanded && text.length > maxLength && (
        <ReadMoreButton onClick={handleToggleExpand}>Read More</ReadMoreButton>
      )}
    </div>
  );
};

export default TruncateText;
