import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react";

type Activity = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  participants: number;
  category: string;
};

const ActivityDetail = () => {
  const { id } = useParams();

  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/activities/${id}`
        );

        const data = await res.json();

        setActivity(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading activity...
      </div>
    );
  }

  if (!activity) {
    return (
      <div className="py-20 text-center">
        Activity not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Activities
      </Link>

      <img
        src={activity.image}
        alt={activity.title}
        className="w-full h-[450px] object-cover rounded-xl mb-8"
      />

      <h1 className="text-4xl font-bold mb-4">
        {activity.title}
      </h1>

      <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          {activity.date}
        </div>

        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          {activity.location}
        </div>

        <div className="flex items-center">
          <Users className="w-4 h-4 mr-2" />
          {activity.participants} Participants
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg leading-relaxed text-gray-700">
          {activity.description}
        </p>
      </div>
    </div>
  );
};

export default ActivityDetail;