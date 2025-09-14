'use client'

import DashboardHeader from "@/components/ui/DashboardHeader"
import DownloadCertificate from "./_components/DownloadCertificate"
import CertificateInformation from "./_components/CertificateInformation"
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const MyCertificatesPage = () => {
  const { status } = useSession();
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated") getCertificates();
    else if (status === "unauthenticated") {
      setError("You must be logged in to view your courses.");
      setLoading(false);
    }
  }, [status]);
  
  const getCertificates = async () => {
    try {
      const response = await axios.get(`/api/certificate`)
      console.log(response.data)
      setCertificates(response.data);
      console.log(certificates)
    } catch (error) {
      setError(error?.response?.data?.message || "Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h1 className="mt-20">Loading...</h1>;

  if (error) return <h1 className="mt-20">{error}</h1>;

  return(
    <main className="mt-20">
      <DashboardHeader />
      <DownloadCertificate certificates={certificates} />
      <CertificateInformation />
    </main>
  )
}

export default MyCertificatesPage