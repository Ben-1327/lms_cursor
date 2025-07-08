import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            LMS Cursor
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            企業向けAI/プログラミング研修のためのLearning Management System
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              ログイン
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
              詳細を見る
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">コース管理</h3>
              <p className="text-gray-600">
                階層的なカリキュラム構造で効率的な学習コンテンツの管理を実現
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">ユーザー管理</h3>
              <p className="text-gray-600">
                受講者、講師、管理者の権限管理と学習進捗の可視化
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">学習分析</h3>
              <p className="text-gray-600">
                詳細なレポート機能で学習効果と運用効率を最適化
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              主要機能
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2">認証・権限管理</h4>
                <p className="text-sm text-gray-600">JWT認証によるセキュアなアクセス制御</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2">課題管理</h4>
                <p className="text-sm text-gray-600">課題提出とレビューの効率的な管理</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2">通知機能</h4>
                <p className="text-sm text-gray-600">メール・Slack連携による自動通知</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2">外部連携</h4>
                <p className="text-sm text-gray-600">Salesforce・Google サービス連携</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              開発状況
            </h2>
            <div className="text-left space-y-2">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Docker & Docker Compose設定完了</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>NestJS バックエンド API基盤構築完了</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Next.js フロントエンド初期設定完了</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>PostgreSQL データベース設計完了</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>JWT認証システム実装完了</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Swagger API ドキュメント設定完了</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
