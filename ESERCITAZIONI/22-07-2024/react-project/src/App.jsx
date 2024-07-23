import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { getAcademyList } from "./api/AcademyClient";

function App() {
  const [academyList, setAcademyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getList = async () => {
    try {
      const data = await getAcademyList();
      setAcademyList(data);
    } catch (error) {
      console.log("Errore:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    console.log(academyList);
  }, [academyList]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1200px] ">
          <div className="p-4 ">
            <h1>{labels.academyList}</h1>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.courseTableTitle}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.courseTableInstructor}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.courseTableCategory}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.courseTableDuration}
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {academyList.map((course) => (
                  <tr key={course.id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {course.title}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {course.instructor}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {course.category}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {course.duration}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <a
                        href="#"
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
