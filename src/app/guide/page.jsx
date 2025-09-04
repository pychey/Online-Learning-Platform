const GuidePage= () => {

  return (
    <div className="mt-20 pl-4 text-center">
        <h1 className="font-medium">Access to Each Pages</h1>
        <ul className="underline">
            <li><a href="/">Home</a></li>
            <li><a href="/courselist">CourseList</a></li>
            <li><a href="/product/:id">CourseDetail</a></li>
            <li><a href="/program/:id">ProgramDetail</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/institute">Institute</a></li>
            <li><a href="/certificate">Certificate</a></li>
            <li><a href="/verify">VerifyCertificate</a></li>
            <li><a href="/my-courses">MyCourses</a></li>
            <li><a href="/my-certificates">MyCertificate</a></li>
            <li><a href="/my-account-settings">MyAccountSetting</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/forgot-password">LostPassword</a></li>
            <li><a href="/help">HelpCenter</a></li>
            <li><a href="/social-impact">SocialImpact</a></li>
        </ul>
    </div>
  )
};

export default GuidePage;