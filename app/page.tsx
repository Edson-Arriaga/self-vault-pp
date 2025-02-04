export default function Home() {
  return (
    <div className="items-center justify-center text-center pt-20 pb-14 min-h-screen font-[family-name:var(--edu-auvicwant-hand)]">
       <h1 className="text-8xl font-bold text-gray mb-14 mx-10">Self Vault</h1>
       <h2 className="text-4xl font-bold text-gray mx-10">Privacy Policy</h2>

       <section className="max-w-4xl mx-auto text-justify font-semibold">
        <div className="my-10">
          <p>Effective Date: <span className="font-bold">February 4, 2025</span></p>
          <p>Last Updated: <span className="font-bold">February 4, 2025</span></p>
          <p className="mt-10 mb-20">Welcome to Self Vault! Your privacy is important to us. This Privacy Policy explains how Self Vault handles your data, ensuring transparency and security while using the app.</p>
        </div>
        <ol className="flex flex-col gap-16">
          <li className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">1. Information We Collect</h3>
            <div>
              <p>Self Vault does not require an account and does not collect personal data. The app allows users to store private entries in three sections:</p>
              <p>- Memories (users can upload photos with their memories).</p>
              <p>- Favorite Things (text-only entries for favorite items).</p>
              <p>- Others (text-only entries for jokes, liked quotes, etc.).</p>
              <p>Since all data is stored locally on your device, we do not collect, store, or access any personal information.</p>
            </div>
          </li>
          <li className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">2. Data Storage & Security</h3>
            <div>
              <ul>
                <li>- All data (including images) is stored locally on your device.</li>
                <li>- We do not use cloud storage or external servers.</li>
                <li>- Your stored content remains private and is only accessible to you.</li>
                <li>- If you uninstall the app, all stored data will be permanently deleted.</li>
              </ul>
            </div>
          </li>
          <li className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">3. Third-Party Services</h3>
            <div>
              <p>Self Vault does not integrate with third-party services, such as:</p>
              <ul>
                <li>- Google Analytics or Firebase Analytics.</li>
                <li>- Cloud storage providers.</li>
                <li>- Advertising networks (e.g., AdMob, Facebook Ads).</li>
              </ul>
              <p>However, we may receive basic usage statistics from Google Play Console, such as the number of downloads and crashes, to improve the app’s performance.</p>
            </div>
          </li>
          <li className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">4. Data Retention & Deletion</h3>
            <div>
              <p>Your data is stored on your device until you manually delete it or uninstall the app. Users can delete all stored data at any time, including:</p>
              <ul>
                <li>- Memories (with images)</li>
                <li>- Favorite Things (text entries)</li>
                <li>- Other Entries (jokes, quotes, etc.)</li>
              </ul>
              <p>Uninstalling the app will permanently erase all stored data. Since we do not collect or store any user data externally, there is no way to recover deleted data.</p>
            </div>
          </li>
          <li className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">5. Children’s Privacy</h3>
            <div>
              <p>Self Vault is not intended for children under 13. We do not knowingly collect or store any data from children. If you are a parent and believe your child has used the app inappropriately, please contact us.</p>
            </div>
          </li>
          <li className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">6. Legal Compliance</h3>
            <div>
              <p>While Self Vault does not collect personal data, we comply with applicable privacy laws, including:</p>
              <ul>
                <li>- General Data Protection Regulation (GDPR) – European Union</li>
                <li>- California Consumer Privacy Act (CCPA) – United States</li>
              </ul>
              <p>Since all data is stored locally on your device, these regulations generally do not apply. However, we remain committed to protecting user privacy.</p>
            </div>
          </li>
          <li className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">7. Updates to This Privacy Policy</h3>
            <div>
              <p>We may update this Privacy Policy from time to time. If significant changes are made, we will notify users within the app. Continued use of Self Vault after updates means you accept the new policy terms.</p>
            </div>
          </li>
          <li className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">8. Contact Us</h3>
            <div>
              <p>If you have any questions or concerns about this Privacy Policy, feel free to contact us:</p>
              <p>📧 <a className="text-blue-600">arleonsuccess@gmail.com</a></p>
              <p>Thank you for using Self Vault!</p>
            </div>
          </li>
        </ol>
       </section>

       <p className="mt-8 font-semibold">By Arleon Success</p>
    </div>
  );
}
