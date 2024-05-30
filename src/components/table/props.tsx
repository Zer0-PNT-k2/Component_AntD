import { Columns, DataType, User } from "../../utils/interface/interfaceTable";
import Button from "../button/Button";

export const columns: Columns<User, DataType<User>>[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, record) => {
      return (
        <div className="boxName">
          <img src={(record as User)?.url} alt={(record as User)?.name} />
          {(record as User)?.name}
        </div>
      );
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (cell) => {
      console.log(cell)
      if (`${cell}` === "Active") {
        return <Button color="blue" title={`${cell}`} />;
      } else {
        return <Button color="orange" title={`${cell}`} />;
      }
    },
  },
  {
    title: "Action",
    dataIndex: "Delete",
    key: "x",
    render: () => (<a href="abc">Delete</a>),
  },
];

export const datas: DataType<User>[] = [
  {
    key: "1",
    name: "John Brown",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "New York No. 1 Lake Park",
    status: "Active",
  },
  {
    key: "2",
    name: "Jim Green",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 42,
    address: "London No. 1 Lake Park",
    status: "Deactivated",
  },
  {
    key: "3",
    name: "Joe Black",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    status: "Active",
  },
  {
    key: "4",
    name: "Joe Black",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    status: "Active",
  },
  {
    key: "5",
    name: "Joe Black",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    status: "Active",
  },
  {
    key: "6",
    name: "Joe Black",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    status: "Active",
  },
  {
    key: "8",
    name: "Joe Black",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    status: "Active",
  },
  {
    key: "9",
    name: "Joe Black",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    status: "Active",
  },
  {
    key: "10",
    name: "Joe Black",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    status: "Active",
  },
  {
    key: "11",
    name: "Joe Black",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    status: "Active",
  },
  {
    key: "12",
    name: "Joe Black",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    status: "Active",
  },
  {
    key: "13",
    name: "Joe Black",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    status: "Active",
  },
  {
    key: "14",
    name: "Joe Black",
    url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    status: "Active",
  },
];
