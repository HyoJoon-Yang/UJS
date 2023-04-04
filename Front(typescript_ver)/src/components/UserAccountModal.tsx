import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { getMe, IModifyProfile, modifyUser } from "src/api";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import useUser from "src/lib/useUser";

interface IForm {
  // email: string;
  // password: string;
  nickname: string;
  gender: string;
  height: number;
  weight: number;
  avator: any;
}

export default function UserAccountModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit } = useForm<IModifyProfile>();
  const queryClient = useQueryClient();
  const mutation = useMutation(modifyUser, {
    onSuccess: (data: IModifyProfile) => {
      console.log("mutation is successful");
      queryClient.refetchQueries(["me"]);
      console.log(data);
    },
    onError: () => {
      console.log("mutation has an error");
    },
  });

  const { user } = useUser();

  const onSubmit = (data: IForm) => {
    data.avator = data.avator[0];
    mutation.mutate(data);
  };

  return (
    <div>
      <img
        src="img/gear.png"
        alt="gear.png"
        style={{
          height: "25px",
          position: "absolute",
          top: 0,
          left: "150px",
          cursor: "pointer",
        }}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <b>사용자 정보 수정</b>
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>닉네임</Form.Label>
              <Form.Control
                defaultValue={user?.nickname}
                {...register("nickname")}
                type="text"
              />
              <Form.Text className="text-muted" style={{ fontSize: "13px" }}>
                변경할 닉네임을 입력해주세요.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>성별</Form.Label>
              <Form.Check
                {...register("gender")}
                type="radio"
                value="male"
                name="gender"
                label="남"
                defaultChecked={user?.gender === "male"}
              />
              <Form.Check
                {...register("gender")}
                type="radio"
                value="female"
                name="gender"
                label="여"
                defaultChecked={user?.gender === "female"}
              />
              <Form.Text className="text-muted" style={{ fontSize: "13px" }}>
                성별을 선택해주세요.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ float: "left", marginRight: "30px" }}
            >
              <Form.Label>신장(cm)</Form.Label>
              <Form.Control
                defaultValue={user?.height}
                {...register("height")}
                type="text"
                style={{ width: "150px" }}
              />
              <Form.Text className="text-muted" style={{ fontSize: "13px" }}>
                신장을 입력해주세요.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>체중(kg)</Form.Label>
              <Form.Control
                defaultValue={user?.weight}
                {...register("weight")}
                type="text"
                style={{ width: "150px" }}
              />
              <Form.Text className="text-muted" style={{ fontSize: "13px" }}>
                체중을 입력해주세요.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>프로필 이미지 변경</Form.Label>
              <input
                {...register("avator")}
                type="file"
                style={{ display: "block" }}
              />
              <Form.Text className="text-muted" style={{ fontSize: "13px" }}>
                변경할 프로필 이미지를 업로드해주세요.
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ border: "none" }}
              className="btn_close"
              onClick={handleClose}
            >
              닫기
            </Button>
            <Button
              type="submit"
              style={{ border: "none", backgroundColor: "#609966" }}
              className="btn_close"
              onClick={handleClose}
            >
              수정하기
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
