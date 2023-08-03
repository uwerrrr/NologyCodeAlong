// we use interface or type Obj for defining data type of props 
export interface CardProps {
  // optional value in interface
  heading?: string; // ? ->  heading is optional - it doesn't need to be specified
  content: string;
}

const Card = ({ heading, content }: CardProps) => {
  return (
    <div>
      {/* if there's heading -> show head -> else -> show "default" */}
      <h2>{heading || "default"}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
