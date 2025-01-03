import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        deleniti, veritatis quidem dignissimos mollitia corrupti quam quia.
        Vitae, cumque mollitia officiis illo molestias optio commodi sit.
        Debitis, recusandae. Quam, iste?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-posts/1"} className="text-blue-500">
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
