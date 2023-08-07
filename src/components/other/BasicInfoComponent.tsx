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
  <div className="d-flex flex-wrap gap-5">
    <section>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
    </section>
    <section>
      <label>Position:</label>
      <input
        type="text"
        value={pretendedPosition}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPretendedPosition(e.target.value)
        }
      />
    </section>
    <section>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
    </section>
    <section>
      <label>Phone:</label>
      <input
        type="text"
        value={phone}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPhone(e.target.value)
        }
      />
    </section>
    <section>
      <label>About Me:</label>
      <textarea
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
      />
    </section>
  </div>
);

export default BasicInfoComponent;
