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
}) => (
  <div className="d-flex flex-wrap  container  justify-content-center">
    <section className="  ">
      <div className="row">
        <div className="col-12">
          <label className="">Name:</label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>
        <div className="col-12">
          <label>Position:</label>
          <input
            type="text"
            value={pretendedPosition}
            className="form-control"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPretendedPosition(e.target.value)
            }
          />
        </div>
      </div>
    </section>

    <section className="form-group col-10 col-md-10">
      <label>Email:</label>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <label>Phone:</label>
      <input
        type="text"
        className="form-control"
        value={phone}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPhone(e.target.value)
        }
      />

      <label>About Me:</label>
      <textarea
        className="form-control"
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
      />
    </section>
  </div>
);

export default BasicInfoComponent;
