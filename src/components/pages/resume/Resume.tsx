import { TitleText } from "../../common";
import Card from "./card/Card";
import { getResumeData } from "../../../core/services/api";
import { useSelector } from "react-redux";
import Tilt from "react-parallax-tilt";
import "aos/dist/aos.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const Resume = () => {
  const navigation = useNavigate()
  const resumeData = useSelector(
    (state: any) => state.resumeDataState.resumeDataState
  );
  const [searchParams, setSearchParams] = useSearchParams()
  const {} = getResumeData(
    "getResume",
    "https://689e9f3a3fed484cf8778bea.mockapi.io/resumeApi"
  );

  const cardClickHandler = (id: number) => {
    setSearchParams((params: any) => {
      params.set("id", id)
      return params
    })
    navigation(`/resume-detail/${id}`);
  };

  return (
    <div className="rsume-page">
      <div className="top">
        <TitleText
          title="مدیریت رزومه"
          fontSize={20}
          color="#1F2937"
          className="mt-10 mr-6"
        />
      </div>
      <div className="bottom w-full flex justify-center">
        <div className="card-control w-[90%] flex justify-center flex-wrap gap-8 my-12">
          {resumeData?.map((item: any, index: number) => {
            return (
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.05}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
              >
                <Card
                  key={index}
                  image={item.image}
                  title={item.resumeName}
                  description={item.jobDescription}
                  onClick={() => cardClickHandler(item.id)}
                />
              </Tilt>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
