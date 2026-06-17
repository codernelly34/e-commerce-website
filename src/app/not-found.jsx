import HomeNav from "@/components/HomeNav.jsx";

export default function NotFoundPage() {
  return (
    <>
      <div className="bg-gray-900 text-white">
        <HomeNav />
      </div>
      <div className="text-center p-6">
        <h1 className="text-3xl font-bold">Sorry Page Not Available</h1>
        <p>Sorry this page you visited we are currently working on it </p>
      </div>
    </>
  );
}
