import React, { ChangeEvent } from "react";
import { BasicInfoProps } from "../../interface/BasicInfoProps";

const BasicInfoComponent: React.FC<BasicInfoProps> = ({
  name,
  pretendedPosition,
  email,
  phone,
  description,
  setName,
  setPretendedPosition,
  setEmail,
  setPhone,
  setDescription,
  social,
  setSocial,
}) => (
  <div className="d-flex justify-content-between flex-wrap col-12 ">
    <div className="row col-md-8">
      <div className="m-3 ">
        <input
          type="text"
          value={name}
          placeholder="Name"
          className="form-control"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </div>

      <div className="m-3">
        <input
          type="text"
          placeholder="Position"
          value={pretendedPosition}
          className="form-control"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPretendedPosition(e.target.value)
          }
        />
      </div>
    </div>

    <div className="form-group col-12 col-md-4">
      <div className="row">
        <div className="mx-3 my-1">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="mx-3  my-1">
          <input
            placeholder="Phone or City"
            type="text"
            className="form-control "
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
          />
        </div>
        <div className="mx-3  my-1">
          <input
            placeholder="Social"
            type="text"
            className="form-control "
            value={social}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSocial(e.target.value)
            }
          />
        </div>
      </div>
    </div>

    <div className="col-12">
      <textarea
        placeholder="About Me"
        className="form-control m-3"
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
      />
    </div>
  </div>
);

export default BasicInfoComponent;
