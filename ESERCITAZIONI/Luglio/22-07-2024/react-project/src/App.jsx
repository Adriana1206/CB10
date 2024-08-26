import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { getAcademyList } from "./api/AcademyClient";
import { Link } from 'react-router-dom';

function App() {
  const [academyList, setAcademyList] = useState([]);
  const [filteredAcademyList, setFilteredAcademyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const getList = async () => {
    try {
      const data = await getAcademyList();
      setAcademyList(data);
      setFilteredAcademyList(data); // Inizialmente mostra tutti i corsi
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
    // Filtra la lista dei corsi 
    const filtered = academyList.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAcademyList(filtered);
  }, [searchTerm, academyList]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1200px] ">
          <div className="p-4 flex items-center">
            <h1 className="mr-8">{labels.academyList}</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left rtl:text-right">
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
                {filteredAcademyList.map((course) => (
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
                      <Link
                        to={`/courses/${course.id}`}
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        {labels.academyTableBtnDetail}
                      </Link>
                      <Link
                        to={`/edit/${course.id}`}
                        className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        {labels.edit}
                      </Link>
                      <button
                        onClick={() => handleDelete(course.id)}
                        className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                      >
                        {labels.delete}
                      </button>
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
