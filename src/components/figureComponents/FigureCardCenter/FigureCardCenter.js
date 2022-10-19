import JackOfClub from "../JackOfClub";
import JackOfDiamond from "../JackOfDiamond";
import JackOfHeart from "../JackOfHeart";
import JackOfSpade from "../JackOfSpade";
import KingOfClub from "../KingOfClub";
import KingOfDiamond from "../KingOfDiamond";
import KingOfHeart from "../KingOfHeart";
import KingOfSpade from "../KingOfSpade";
import QueenOfClub from "../QueenOfClub";
import QuennOfDiamond from "../QuennOfDiamond";
import QueenOfHeart from "../QueenOfHeart";
import QueenOfSpade from "../QueenOfSpade";

const FigureCardCenter = ({ name, number }) => {
    const FigureContent = () => {
        switch (number) {
            case 11:
                if (name === "spade") {
                    return <JackOfSpade />;
                }
                if (name === "club") {
                    return <JackOfClub />;
                }
                if (name === "heart") {
                    return <JackOfHeart />;
                }
                if (name === "diamond") {
                    return <JackOfDiamond />;
                }
                break;
            case 12:
                if (name === "spade") {
                    return <QueenOfSpade />;
                }
                if (name === "club") {
                    return <QueenOfClub />;
                }
                if (name === "heart") {
                    return <QueenOfHeart />;
                }
                if (name === "diamond") {
                    return <QuennOfDiamond />;
                }
                break;
            case 13:
                if (name === "spade") {
                    return <KingOfSpade />;
                }
                if (name === "club") {
                    return <KingOfClub />;
                }
                if (name === "heart") {
                    return <KingOfHeart />;
                }
                if (name === "diamond") {
                    return <KingOfDiamond />;
                }
                break;
            default:
                break;
        }
    };

    return (
        <div className="figure-picture">
            <FigureContent />
        </div>
    );
};

export default FigureCardCenter;