import { CheckSquareFilled, ClockCircleOutlined } from "@ant-design/icons";
import { Button, Divider, Skeleton, Tag, Timeline } from "antd";
import moment from "moment";
import useSWR from "swr";

const PickDrop = ({ trip_id, setBoard, setDrop, board, drop }: any) => {
  const { data: pickDropData, error } = useSWR(`/boards-drops/${trip_id}`);

  if (!pickDropData && !error) {
    return (
      <div className="p-5">
        <Skeleton className=" w-100" />
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-3 px-4 pt-2 justify-start">
      <div>
        <Divider orientation="center">Pick Up Location</Divider>
        <Timeline mode="left">
          {pickDropData?.data?.boards?.map((item: any, index: any) => {
            return (
              <Timeline.Item
                // dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                label={item.board_time}
                key={index}
              >
                <Button
                  type="link"
                  className={`flex items-center  ${
                    item?.location == board?.location
                      ? "border_blue"
                      : "border_grey"
                  }`}
                  onClick={() => setBoard(item)}
                >
                  {item.location}{" "}
                  {true && <CheckSquareFilled color="#ababab" />}
                </Button>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
      <div>
        <Divider orientation="center">Drop Location</Divider>
        <Timeline mode="left">
          {pickDropData?.data?.drops?.map((item: any, index: any) => {
            return (
              <Timeline.Item
                key={index}
                dot={
                  <ClockCircleOutlined
                    style={{ fontSize: "16px", backgroundColor: "transparent" }}
                  />
                }
                style={{ backgroundColor: "transparent" }}
                label={
                  <>
                    <Tag color="green">Rs. {item.price}</Tag>{" "}
                    {moment(item.drop_datetime).format("LT")}
                  </>
                }
              >
                <Button
                  type="link"
                  className={`d-flex align-items-center  ${
                    item?.location == drop?.location
                      ? "border_blue"
                      : "border_grey"
                  }`}
                  onClick={() => setDrop(item)}
                >
                  {item.location}{" "}
                  {true && <CheckSquareFilled color="#ababab" />}
                </Button>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default PickDrop;
