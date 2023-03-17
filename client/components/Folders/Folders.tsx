import { GET_ALL_CATEGORY } from "@/utils/apollo-requestes";
import { useQuery } from "@apollo/client";
import { FC } from "react";
import Loader from "../Loader/Loader";

import SmallFolder from "./SmallFolder/SmallFolder";

const Folders: FC = () => {
  const { data, error, loading } = useQuery(GET_ALL_CATEGORY);

  if (loading) return <Loader loading={loading} />;
  if (error) return <div>error...</div>;

  return (
    <section className="body-center shadow-md rounded-sm my-5 relative z-[1] bg-gradien-catalog">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,250px))] justify-center py-4 gap-3">
        {!loading &&
          !error &&
          data.categories.map((item) => (
            <SmallFolder
              key={item.linkName}
              linkTo={item.linkName}
              name={item.nameRu}
            />
          ))}
      </div>
    </section>
  );
};

export default Folders;
