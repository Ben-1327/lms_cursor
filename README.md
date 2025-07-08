# LMS Cursor - Learning Management System

企業向けAI/プログラミング研修のLMS（Learning Management System）

## 技術スタック

- **フロントエンド**: Next.js + TailwindCSS
- **バックエンド**: NestJS (TypeScript)
- **データベース**: PostgreSQL
- **認証**: JWT + Passport
- **コンテナ**: Docker & Docker Compose

## 主要機能

- 認証・権限管理（システム管理者、コース管理者、講師、受講者）
- コース管理
- カリキュラム管理
- 受講者管理
- 学習進捗管理
- 通知/リマインド機能
- 外部システム連携（Salesforce、Slack、Google サービス）

## 開発環境のセットアップ

### 前提条件

- Node.js (18以上)
- Docker & Docker Compose
- Git

### 初期セットアップ

1. リポジトリのクローン
```bash
git clone https://github.com/Ben-1327/lms_cursor.git
cd lms_cursor
```

2. 環境変数の設定
```bash
# フロントエンド用
cp frontend/.env.example frontend/.env.local

# バックエンド用
cp backend/.env.example backend/.env
```

3. Dockerコンテナの起動
```bash
docker-compose up -d
```

4. データベースのマイグレーション実行
```bash
docker-compose exec backend npm run migration:run
```

### 開発サーバーの起動

```bash
# 全サービス起動
docker-compose up

# フロントエンドのみ起動
docker-compose up frontend

# バックエンドのみ起動
docker-compose up backend
```

### アクセスURL

- フロントエンド: http://localhost:3000
- バックエンドAPI: http://localhost:3001/api
- PostgreSQL: localhost:5432

## プロジェクト構成

```
lms_cursor/
├── frontend/          # Next.js フロントエンド
├── backend/           # NestJS バックエンド
├── docs/              # 設計ドキュメント
├── docker-compose.yml # Docker構成
└── README.md          # このファイル
```

## APIドキュメント

バックエンド起動後、以下のURLでAPIドキュメントを確認できます：
- Swagger UI: http://localhost:3001/api/docs

## 貢献

1. フィーチャーブランチを作成
2. 変更をコミット
3. プルリクエストを作成

## ライセンス

MIT License 