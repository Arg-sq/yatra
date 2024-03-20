import ClientLayout from "@/components/layout/client/ClientLayout";
import { Button, Result } from "antd";
import html2canvas from "html2canvas";
import { useRouter } from "next/router";
import { useRef } from "react";
import useSWR from "swr";
import Invoice from "./invoice";
import { usePDF } from "react-to-pdf";

const Success = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const router = useRouter();

  const {
    data: registerDetail,
    error,
    isLoading,
  } = useSWR(
    router.query.id ? `user/trip/payment/success/${router.query.id}` : null
  );

  const printing = useRef(null);

  const printDoc = async () => {
    if (printing.current) {
      const canvas = await html2canvas(printing.current);
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <ClientLayout>
      <div className="section_padding">
        <div className="container">
          <div className="row">
            <Result
              status="success"
              title=""
              subTitle={
                <>
                  <div>Your seat payment is successfull.</div>
                  <div> Please Download this ticket.</div>
                  <div>
                    {" "}
                    You can also download it later from your user dashboard.
                  </div>
                </>
              }
              extra={[
                <div
                  key={1}
                  // style={{ display: "inline-block" }}
                  className="width-auto"
                >
                  <div ref={targetRef}>
                    <Invoice />
                  </div>
                  <div className="mt-4">
                    <Button
                      key={2}
                      type="primary"
                      className="mr-3"
                      style={{ marginRight: 10 }}
                      onClick={() => toPDF()}
                    >
                      Download your ticket
                    </Button>

                    <Button key="buy" onClick={() => router.push("/")}>
                      Go to home
                    </Button>
                  </div>
                </div>,
              ]}
            />
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Success;
